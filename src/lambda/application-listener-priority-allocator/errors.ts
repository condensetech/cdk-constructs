import { ListenerRuleId } from './interfaces';

export class PriorityAlreadySetError extends Error {
  constructor() {
    super(`Priority has been already set at least once for listener.`);
  }
}

export class ListenerRuleNotFoundError extends Error {
  constructor(readonly listenerRuleId: ListenerRuleId) {
    super(`Listener rule '${listenerRuleId.rulePath}' not found for listener.`);
  }
}

export class ListenerRuleAlreadyExistsError extends Error {
  constructor(readonly listenerRuleId: ListenerRuleId) {
    super(`Listener rule '${listenerRuleId.rulePath}' already exists for listener.`);
  }
}

export class ListenerRulePriorityAlreadyTakenError extends Error {
  constructor(
    readonly listenerRuleId: ListenerRuleId,
    readonly priority: number,
  ) {
    super(`Priority '${priority}' for listener rule '${listenerRuleId.rulePath}' already taken for listener.`);
  }
}
