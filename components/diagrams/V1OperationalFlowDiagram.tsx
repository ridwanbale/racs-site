import { v1Experiment } from "@/content/experiment";
import { ProcessFlow } from "./ProcessFlow";

export function V1OperationalFlowDiagram() {
  return (
    <div className="space-y-5" aria-labelledby="v1-operational-flow-title">
      <h3
        id="v1-operational-flow-title"
        className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-strong"
      >
        V1 operational flow
      </h3>
      <ProcessFlow
        items={v1Experiment.operationalFlow}
        ariaLabel="V1 operational flow"
        spacious
      />
    </div>
  );
}
