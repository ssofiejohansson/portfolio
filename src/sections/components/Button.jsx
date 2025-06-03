import styled from 'styled-components';

const ButtonBase = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--secondary);
    border: none;
    cursor: pointer;
    font-size: 22px;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
    padding: 0;

    &:hover {
        background: var(--secondary);
        color: var(--primary);
    }
`;

export const Button = ({ href, target, rel, icon, ...props }) => {
    return (
        <ButtonBase href={href} target={target} rel={rel} {...props}>
            {icon}
        </ButtonBase>
    );
};
