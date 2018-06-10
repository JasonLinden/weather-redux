import { createAction } from "redux-actions";  

export const FETCH_POI = "FETCH_POI";  
export const FETCH_POI_DONE = "FETCH_POI_DONE";

const fetchPoiAction = createAction(FETCH_POI);  
const fetchPoiDoneAction = createAction(FETCH_POI_DONE);

const fetchPoi = () => async (dispatch) => {  
  dispatch(fetchPoiAction());

  const response = await fetch("/path/to/poi.json");
  const poi = await response.json();

  dispatch(fetchPoiDoneAction(poi));
};

export {  
  fetchPoi,
};