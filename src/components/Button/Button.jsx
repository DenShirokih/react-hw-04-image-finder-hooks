import { Button } from './Button.module';
export const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};
