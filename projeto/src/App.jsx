import { useState } from 'react';
import './App.css';

const initialJson = JSON.stringify({
  id_cliente: "12345",
  tipo_transacao: "consulta_saldo"
}, null, 2);

function App() {
  const [jsonInput, setJsonInput] = useState(initialJson);
  const [apiResponse, setApiResponse] = useState('Aguardando requisição...');
  const [mongoData, setMongoData] = useState('Aguardando requisição...');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendRequest = async () => {
    setError('');
    setIsLoading(true);
    setApiResponse('Enviando...');
    setMongoData('Aguardando...');

    let requestBody;
    try {
      requestBody = JSON.parse(jsonInput);
    } catch (e) {
      setError('Erro: O JSON inserido é inválido.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/transactions/consultar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
      }
      const responseData = await response.json();
      setApiResponse(JSON.stringify(responseData, null, 2));

      const clienteId = requestBody.id_cliente;
      if (clienteId) {
        await fetchAndShowMongoData(clienteId);
      } else {
        setMongoData("Não foi possível encontrar um 'id_cliente' para consultar o banco de dados.");
      }

    } catch (err) {
      setError(`Falha na comunicação com a API: ${err.message}`);
      setApiResponse('Erro!');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAndShowMongoData = async (clienteId) => {
    setMongoData(`Buscando dados no MongoDB para o cliente ${clienteId}...`);
    try {
      const response = await fetch(`http://localhost:8080/transactions/cliente/${clienteId}`);
      if (!response.ok) {
        throw new Error(`Endpoint do MongoDB não encontrado ou com erro: ${response.status}`);
      }
      const data = await response.json();
      setMongoData(JSON.stringify(data, null, 2));
    } catch (err) {
      setMongoData(`Erro ao buscar dados do MongoDB: ${err.message}\n\nLembre-se de criar o endpoint GET /transactions/cliente/{id} no seu backend.`);
    }
  };

  return (
    <div className="container">
      <h1>Painel de Teste React - Transações</h1>
      <div className="panel">
        <h2>1. Enviar Instrução para a API</h2>
        <p>Cole o corpo da requisição (JSON) abaixo e clique em enviar.</p>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={handleSendRequest} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar Requisição POST'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="outputs">
        <div className="panel">
          <h2>2. Resposta da API</h2>
          <pre><code>{apiResponse}</code></pre>
        </div>
        <div className="panel">
          <h2>3. Dados no MongoDB</h2>
          <pre><code>{mongoData}</code></pre>
        </div>
      </div>
    </div>
  );
}

export default App;
