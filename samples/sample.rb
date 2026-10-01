# frozen_string_literal: true

module Bakery
  class Cupcake
    FLAVOURS = %i[strawberry vanilla raspberry].freeze

    attr_reader :flavour, :sprinkles

    def initialize(flavour: :strawberry, sprinkles: true)
      @flavour = flavour
      @sprinkles = sprinkles
    end

    def describe
      topping = sprinkles ? "with sprinkles" : "plain"
      "A #{flavour} cupcake, #{topping}"
    end

    def self.box_of(count = 6)
      Array.new(count) { new(flavour: FLAVOURS.sample) }
    end
  end
end

puts Bakery::Cupcake.box_of(3).map(&:describe)
