import styled from 'styled-components';

const ButtonBase = styled.a`
    text-decoration: none;
    color: ${({ isPrimary }) => (isPrimary ? 'var(--secondary)' : 'var(--primary)')};
    width: 100%;
    border: 2px solid var(--primary); 
    border-radius: 12px;
    background-color: ${({ isPrimary }) => (isPrimary ? 'var(--primary)' : 'transparent')}; 
    cursor: pointer;
    padding: 10px 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ isPrimary }) => (isPrimary ? 'var(--secondary)' : 'var(--primary)')}; 
        color: ${({ isPrimary }) => (isPrimary ? 'var(--primary)' : 'var(--secondary)')}; 
    }
`;

export const Button = ({ href, target, rel, buttonText, isPrimary }) => {
    return (
        <ButtonBase href={href} target={target} rel={rel} isPrimary={isPrimary}>
            {buttonText}
        </ButtonBase>
    );
};