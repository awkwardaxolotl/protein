/**
 * State
 *
 * How things currently are.
 *
 * - Environment
 * - Backend
 * - Local
 */
export interface State<L, B> {
  local: L
  backend: B
  environment: Environment
}

interface Environment {
  location: Location
}

export class NodeEnvironment implements Environment {
  get location(): Location {
    throw new Error( 'ERROR: Not implemented' )
  }
}


/**
 * Stimulus
 *
 * An event which can change the state.
 *
 * Backend and environmen stimuli are implicitly
 */
export interface Stimulus<T, S> {
  type: T
  payload: S
}


/**
 * Transitions
 *
 * How the state changes in response to stimuli.
 */
export interface Transition<L, B> {
  applies: (stimulus: Stimulus<any, any>) => boolean
  apply: (state: State<L, B>, stimulus: Stimulus<any, any>) => State<L, B>
}
