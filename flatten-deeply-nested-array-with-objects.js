const flattenIds = arr => arr.flatMap(({ id = [], links }) => 
  [].concat(id, flattenIds(links))
);
    
const data = [{ title: 'Title', type: 'section', links: [{ label: 'Label', id: 'id_1', links: [{ title: 'Title', type: 'section', links: [{ label: 'Label', id: 'id_2', links: [{ label: 'Label', id: 'id_3', links: [] }] }] }, { title: 'Other title', type: 'section', links: [{ label: 'Label', id: 'id_4', links: [] }] }] }] }];

const result = flattenIds(data);

console.log(result);
