import {
    FileTextOutlined
} from '@ant-design/icons';
import { Typography } from 'antd'
const { Text } = Typography
export default function FileInfo(props: { name?: string, style?: any }) {
    return (
        <kbd>
            <FileTextOutlined style={{ color: "#2184ff", paddingRight: ".3em" }} />
            <Text style={{ color: "#2184ff", ...props.style }}>{props.name}</Text>
        </kbd>
    )
}