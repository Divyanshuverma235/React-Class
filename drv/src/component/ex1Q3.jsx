import{ useState } from 'react';

const TextToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>Your text goes here</p>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide text' : 'Show text'}
      </button>
    </div>
  );
};

export default TextToggle;


//3. create a pure functional component that will toggle the visibility of text written  by user take one and one button , button willl toggle when the text is visible button text shoul be "Hide text"
//when the text is hidden button text should be "Show text"

//4. Create a react pure functional component that wil take tect input and print total number of character