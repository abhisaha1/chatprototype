export default function prefetchComponentData(dispatch, components, params, req) {
    const needs = components.reduce((prev, current) => {
        return (current.prefetchData || []).concat(prev);
    }, []);
    const promises = needs.map(need => dispatch(need(req, params)));
    return Promise.all(promises);
}