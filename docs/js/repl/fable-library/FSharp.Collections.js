import { compare, identityHash, equals, structuralHash } from "./Util.js";
export function HashIdentity$$$FromFunctions(hash, eq) {
  return {
    GetHashCode(x) {
      return hash(x);
    },

    Equals(x$$1, y) {
      return eq(x$$1, y);
    }

  };
}
export function HashIdentity$$$Structural() {
  return HashIdentity$$$FromFunctions(structuralHash, equals);
}
export function HashIdentity$$$Reference() {
  return HashIdentity$$$FromFunctions(identityHash, function (e1$$1, e2$$1) {
    return e1$$1 === e2$$1;
  });
}
export function ComparisonIdentity$$$FromFunction(comparer) {
  return {
    Compare(x$$2, y$$1) {
      return comparer(x$$2, y$$1);
    }

  };
}
export function ComparisonIdentity$$$Structural() {
  return ComparisonIdentity$$$FromFunction(compare);
}