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
        <h3 className="text-3xl font-bold text-secondary-700">{props.title}</h3>
        <div className="mt-6 text-xl leading-relaxed text-gray-700">
          {props.description}
        </div>
      </div>

      <div className="w-full p-4 sm:w-1/2">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-110"
            style={{ minHeight: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
