/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Contenido del label
     */
    label: string;
    /**
     * Como de largo quieres que sea el label?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Quieres que el texto sea en mayúsculas?
     */
    allCaps?: boolean;
    /**
     * Que tipo de color quieres?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color rgb de la fuente
     */
    fontColor?: string;
    /**
     * Color del fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
