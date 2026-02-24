

interface BodyFrameProps {
  className?: string;
}

const BodyFrame: React.FC<BodyFrameProps> = ({ className }) => {

  return (
    <div className={`bg-gray-800 text-white p-4 ${className ?? ''}`}>
      <div className="text-4xl font-bold text-center my-20">
        <p className="text-red-500">React Frontend</p>
        <br /><br /><br />
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        <p>Body</p>
        </div>
    </div>
  );
};

export default BodyFrame;
