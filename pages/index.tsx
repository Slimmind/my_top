import { Heading } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';
import { Tag } from '../components';
import { Rating }  from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <div className="body">
      <Heading tag='h1'>Title</Heading>
      <Button appearance='primary' arrow='right'>Primary Button</Button>
      <Button appearance='ghost' arrow='down'>Ghost Button</Button>
      <Paragraph size="sm">Small Paragraph</Paragraph>
      <Paragraph size="md">Medium Paragraph</Paragraph>
      <Paragraph size="lg">Large Paragraph</Paragraph>
      <Tag size='md'>Ghost</Tag>
      <Tag size='md' color='red'>Ghost</Tag>
      <Tag size='md' color='green'>Ghost</Tag>
      <Tag size='md' color='gray'>Ghost</Tag>
      <Tag size='md' color='primary'>Ghost</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
};

export default withLayout(Home);
