const renderProfiler = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
): void =>
  // eslint-disable-next-line no-console
  console.table({
    "Profiler Data": {
      id,
      "Phase(mount/update/nested-update)": phase,
      "Actual Duration(milliseconds)": actualDuration,
      "Base Duration(milliseconds)": baseDuration,
      "Start Time(timestamp)": startTime,
      "Commit Time(timestamp)": commitTime,
    },
  });
export default renderProfiler;
