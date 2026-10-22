import { useCallback, useState } from "react";

// chama make() na montagem e a cada regenerate()
export function useGenerator(make) {
  const [result, setResult] = useState(make);
  const regenerate = useCallback(() => setResult(make()), [make]);
  return [result, regenerate];
}
