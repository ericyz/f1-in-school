import { getRaces } from '../../config/firebaseClient';

// export function getWidgets(req) {
//   let widgets = req.session.widgets;
//   if (!widgets) {
//     widgets = initialWidgets;
//     req.session.widgets = widgets;
//   }
//   return widgets;
// }


export default async function load(req) {
  return await getRaces();
}
