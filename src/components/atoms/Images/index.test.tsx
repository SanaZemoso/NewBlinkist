
import { render, screen } from '@testing-library/react';
import Images from '.';

test('it has renders Images', () => {
  render(<Images src="/assets/2.png"/>);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});
