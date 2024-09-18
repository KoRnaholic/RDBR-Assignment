export default function ChooseAgent({ agents }) {
  return (
    <div className="mt-10 w-full text-[#021526] font-semibold">
      <label>აგენტი</label>

      <label className="mt-2 block w-1/2  text-[#021526] font-semibold text-sm">
        აირჩიე *
        <select
          className="mt-1 block w-full outline-none px-2 rounded-md border py-2"
          // value={inputEmailValue}
          // onChange={handleEmailChange} // Controlled input for email
          name="email"
        >
          {agents?.map((agent) => (
            <option key={agent.id}>
              {agent.name} {agent.surname}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
