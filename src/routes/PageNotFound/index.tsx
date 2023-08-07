import { NavLink } from "react-router-dom";

export function Page404() {
  return (
    <div>
        <h1>Página não encontrada</h1>
        <button type="button">
          <NavLink to="/">
            Retornar para inicio
          </NavLink>
        </button>
    </div>
  )
}