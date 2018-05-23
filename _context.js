import {createContext} from "react"

const LayerContext = createContext({})

export const LayerGroupProvider = LayerContext.Provider
export const LayerGroupConsumer = LayerContext.Consumer

