from dataclasses import dataclass, field

FLAVOURS = ["strawberry", "vanilla", "raspberry"]


@dataclass
class Cupcake:
    flavour: str = "strawberry"
    sprinkles: bool = True
    toppings: list[str] = field(default_factory=list)

    def describe(self) -> str:
        topping = "with sprinkles" if self.sprinkles else "plain"
        return f"A {self.flavour} cupcake, {topping}"


def box_of(count: int = 6) -> list[Cupcake]:
    # One of each flavour, round and round
    return [Cupcake(FLAVOURS[i % len(FLAVOURS)]) for i in range(count)]


if __name__ == "__main__":
    for cake in box_of(3):
        print(cake.describe())
