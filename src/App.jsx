import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormData } from "./redux/features/Actions/fromDataAction";

const App = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.fromData.formData); // Corrected the selector

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);

//   console.log(formData); // Logging the correct data

  return <div>hello</div>;
};

export default App;
