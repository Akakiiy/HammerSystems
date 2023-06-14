import {SAVE_ELEMENTS_DASHBOARD} from "../constants/Dashboard";

const initState = {
  objectList : [
    {content: "https://img.freepik.com/premium-photo/top-view-chair-isolated-on-white-background3d-rendering_370527-502.jpg", width: 80, height: 80},
    {content: "https://img.freepik.com/premium-photo/office-chair-top-view-modern-designer-furniture-chair-isolated-on-white-background_2239-10401.jpg", width: 80, height: 80},
    {content: "https://www.glomart.ru/data/img/201711/36674-stol-iz-dereva-TC-10565-3.jpg", width: 80, height: 80},
    {content: '/img/board-elems/tabel.png', width: 250, height: 220}
  ],
  elements: []
}

const dashboard = (state = initState, action) => {
  switch (action.type) {
    case SAVE_ELEMENTS_DASHBOARD: {
      return {
        ...state,
        elements: action.payload
      }
    }
    default:
      return state;
  }
}

export default dashboard
