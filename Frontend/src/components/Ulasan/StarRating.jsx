import { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

function StarRating({ control, name }) {
  // const [rating, setRating] = useState(0); // Current selected rating
  const [hover, setHover] = useState(0);   // Hover preview

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={0}
      rules={{
        required: "Rating tidak boleh kosong",
        min: {
          value: 1,
          message: "Rating minimal 1"
        }
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;

              return (
                <>
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => onChange(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    className={`text-[26px] my-1 ${starValue <= (hover || value) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                  >
                    ★
                  </button>
                </>
              );
            })}
          </div>
          {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
      )}
    />
  );
}

StarRating.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
};

export default StarRating;
