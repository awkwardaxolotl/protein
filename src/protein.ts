/**
 * State
 * 
 * How things currently are.
 * 
 * - Environment
 * - Backend
 * - Local
 */
interface State<L, B> {
  local: L
  backend: B
  environment: Environment
}

interface Environment {
  location: Location
}


/**
 * Stimulus
 *
 * An event which can change the state.
 * 
 * Backend and environmen stimuli are implicitly 
 */
interface Stimulus<T, S> {
  type: T
  payload: S
}


/**
 * Transitions
 * 
 * How the state changes in response to stimuli.
 */
interface Transition<L, B> {
  applies: (stimulus: Stimulus<any, any>) => boolean
  apply: (state: State<L,B>, stimulus: Stimulus<any, any>) => State<L,B>
}
