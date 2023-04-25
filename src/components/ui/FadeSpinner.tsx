import dynamic from 'next/dynamic';

const FadeLoader = dynamic(() =>
  import('react-spinners').then((lib) => lib.FadeLoader)
);

type Props = {
  color?: string;
};

export default function FadeSpinner({ color = 'rgb(79 70 229)' }: Props) {
  return <FadeLoader color={color} />;
}
