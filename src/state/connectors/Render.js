// @flow

export type Props = {children: Function, props: Array<any>}
const Render = ({children, ...props}: Props) => children({...props})

export default Render
