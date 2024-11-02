import { MouseEventHandler, useCallback, useContext, useEffect, useRef, useState } from 'react';
import style from './Modal.module.scss'
import Portal, { createContainer } from '../Portal/Portal';
import { Context } from '../../App';

const MODAL_CONTAINER_ID = "modal-container-id";

interface IModalProps {
    title?: string
    onClose?: () => void
    children?: React.ReactNode | React.ReactNode[]

}
const Modal: React.FC<IModalProps> = ({ children, onClose, title }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isMounted, setMounted] = useState(false);
    const { setHiddenScroll } = useContext(Context)
    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
                setHiddenScroll(false)
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose?.();
                setHiddenScroll(false)
            }
        };

        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);

    const handleClose: MouseEventHandler<
        HTMLDivElement | HTMLButtonElement
    > = useCallback(() => {
        onClose?.();
        setHiddenScroll(false)
    }, [onClose]);
    useEffect(() => {
        if (isMounted) {
            setHiddenScroll(true)
        }
    }, [isMounted])

    return isMounted ? (
        <Portal id={MODAL_CONTAINER_ID}>
            <div className={style.modal} ref={rootRef}>
                <div className={style.modalFilter__content}>
                    <button
                        type="button"
                        className={style.closeButton}
                        onClick={handleClose}
                        data-testid="modal-close-button"
                    >
                        Х
                    </button>
                    <p className={style.title}>{title}</p>
                    {children}
                </div>
            </div>
        </Portal>
    ) : null;
}

export default Modal