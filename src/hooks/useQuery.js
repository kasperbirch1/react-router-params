// useQuery hook
export function useQuery() {
  // return new URLSearchParams(useLocation().search);
  return new URLSearchParams(window.location.search);
}
