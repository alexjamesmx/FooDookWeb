import { createContext, useState, useMemo } from 'react'

export const InfoContext = createContext({
  menus: [],
  setMenus: () => {},
  ventas: [],
  setVentas: () => {},
  userinfo: undefined,
  setUserinfo: () => {},
  restaurante: [],
  setRestaurante: () => {},
  refresh: false,
  setRefresh: () => {},
})
export function InfoProvider (props) {
  const { children } = props
  const [menus, setFinalMenu] = useState([])
  const [ventas, setFinalVentas] = useState([])
  const [userinfo, setFinalUser] = useState([])
  const [restaurante, setFinalRestaurante] = useState([])
  const [refresh, setFinalRefresh] = useState(false)

  const setMenus = (data) => {
    setFinalMenu(data)
  }
  const setVentas = (data) => {
    setFinalVentas(data)
  }
  const setUserinfo = (data) => {
    setFinalUser(data)
  }
  const setRefresh = (data) => {
    setFinalRefresh(data)
  }
  const setRestaurante = (data) => {
    setFinalRestaurante(data)
  }
  const valueContext = {
    menus,
    setMenus,
    ventas,
    setVentas,
    userinfo,
    setUserinfo,
    refresh,
    setRefresh,
    restaurante,
    setRestaurante,
  }
  return <InfoContext.Provider value={valueContext}>{children}</InfoContext.Provider>
}
