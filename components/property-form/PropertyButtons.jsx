import { Button } from "../ui/button";

export default function PropertyButtons({ handleClear }) {
  return (
    <div className="mt-14 flex justify-end gap-4">
      <Button onClick={handleClear} variant="secondary" type="button">
        გაუქმება
      </Button>
      <Button variant="primary" type="submit">
        დაამატე ლისტინგი
      </Button>
    </div>
  );
}
