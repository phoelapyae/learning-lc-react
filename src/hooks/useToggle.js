import { useState } from "react";

function useToggle(initialize = true) {
    const [visible, setVisible] = useState(initialize);

    function toggle() {
        setVisible(prevVisible => !prevVisible);
    }

    return [visible, toggle];
}

export default useToggle;