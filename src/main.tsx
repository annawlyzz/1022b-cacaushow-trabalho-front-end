import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroChocolate from './componentes/cadastrochocolate/CadastroChocolate.tsx';
import CadastroCliente from './componentes/cadastrocliente/CadastroCliente.tsx';
import ControleEstoque from './componentes/cadastroestoque/CadastroEstoque.tsx';
import ListagemPromocoes from './componentes/cadastropromocoes/CadastroPromocoes.tsx';
import RegistroPagamento from './componentes/cadastropagamento/CadastroPagamento.tsx';
import ListaChocolate from './componentes/listagemchocolates/lista-chocolates.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastro-chocolate",
    element: <CadastroChocolate/>,
  },
  {
    path: "/cadastro-cliente",
    element: <CadastroCliente/>,
  },
  {
    path: "/controle-estoque",
    element: <ControleEstoque/>,
  },
  {
    path: "/listagem-promocoes",
    element: <ListagemPromocoes/>,
  },
  {
    path: "/registro-pagamento",
    element: <RegistroPagamento/>,
  },
  {
    path: "/chocolates",
    element: <ListaChocolate/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)