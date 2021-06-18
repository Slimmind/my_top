import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({size='md', children, className, ...props}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.common, className, {
        [styles.small]: size == 'sm',
        [styles.medium]: size == 'md',
        [styles.large]: size == 'lg',
      })}
      {...props}
    >{children}</p>
  );
}