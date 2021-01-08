import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RightArrow = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.357}
            height={18.834}
            viewBox="0 0 20.357 18.834"
            {...props}
        >
            <Path
                data-name="right-arrow (1)"
                d="M13.708.284a.606.606 0 00-1.026 0 1.177 1.177 0 000 1.336l5.2 6.845H.718c-.4 0-.718.419-.718.946s.318.959.718.959h17.166l-5.2 6.832a1.2 1.2 0 000 1.35.606.606 0 001.026 0l6.434-8.465a1.145 1.145 0 000-1.336z"
                fill="#fff"
            />
        </Svg>
    )
}

export default RightArrow;