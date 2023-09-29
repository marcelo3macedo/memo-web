export function startAction({ slug }: any) {
  return {
    type: '@activities/START',
    payload: {
      slug
    }
  };
}
