import { render, screen } from '../../../tests/test-utils';
import Button from '../Button';

describe('Button Component', () => {
  test('renders correctly', () => {
    render(
      <Button
        label="Click Me"
        symbol="C"
        color="green"
        isactive={true}
        onClick={() => {}}
        bordercolor="yellow"
        variant="contained"
      />
    );

    expect(screen.getByText('Click Me')).toBeVisible();
    expect(screen.getByText('C')).toBeInTheDocument();
  });
});
