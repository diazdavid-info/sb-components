import './mylabel.css'

export interface MyLabelProps {
    /**
     * Contenido del label
     */
    label: string
    /**
     * Como de largo quieres que sea el label?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Quieres que el texto sea en mayúsculas?
     */
    allCaps?: boolean
    /**
     * Que tipo de color quieres?
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Color rgb de la fuente
     */
    fontColor?: string
    /**
     * Color del fondo
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label', size = 'normal', allCaps = false, color = 'primary', fontColor, backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={ `label ${ size } text-${ color }` } style={ { color: fontColor, backgroundColor } }>
          { (allCaps) ? label.toUpperCase() : label }
      </span>
    )
}

export default MyLabel
