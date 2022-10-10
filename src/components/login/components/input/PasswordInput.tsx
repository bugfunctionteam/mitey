import { h } from 'preact';
import { useState, forwardRef } from 'react';
import { InputButton } from './InputButton';
import { Input } from './InputStyles';
import { InputContainer, ChildrenContainer } from './PasswordInputStyles';

interface Props {
  disabled?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordShowing(!isPasswordShowing);
  }

  return (
    <InputContainer>
      <Input
        required
        type={isPasswordShowing ? 'text' : 'password'}
        name="password"
        aria-label="password"
        placeholder="Password"
        ref={ref}
        {...props}
      />

      <ChildrenContainer>
        <InputButton type="button" onClick={togglePasswordVisibility}>
          {isPasswordShowing ? 'Hide' : 'Show'}
        </InputButton>
      </ChildrenContainer>
    </InputContainer>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
