export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="input-number" style={{ fontSize: '1.5rem' }}>
        Input number
      </label>

      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        name="input-number"
      />
    </div>
  );
};
