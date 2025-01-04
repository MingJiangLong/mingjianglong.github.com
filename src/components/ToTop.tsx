import { VerticalAlignTopOutlined } from "@ant-design/icons"


type Props = {
    onClick: () => void
}
export default function (props: Props) {
    return (
        <div style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            background: "#FFFFFF",
            borderWidth: 1,
            borderColor: "blue",
            position: "fixed",
            right: "5%",
            bottom: "3%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            onClick={props.onClick}
        >
            <VerticalAlignTopOutlined size={30} style={{ fontWeight: 700 }} />
        </div>
    )
}