import Skeleton from '../components/fps/skeleton/skeleton';

export default {
  title: 'FPS/Design System/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

// Базовый скелетон
export const Default = {
  args: {
    width: '300px',
    height: '20px',
  },
};

// Скелетон карточки
export const Card = {
  args: {
    width: '200px',
    height: '120px',
  },
};

// Скелетон текста
export const Text = {
  args: {
    width: '100%',
    height: '16px',
  },
}; 