import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    'gap-8',
    'py-6',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full px-6 text-center sm:w-1/2 md:px-10">
        <h3 className="text-3xl font-bold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-relaxed">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
