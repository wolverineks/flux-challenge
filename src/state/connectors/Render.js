// @flow

export type Props = {children: Function, props: Array<any>}
export const Render = ({children, ...props}: Props) => children({...props})
