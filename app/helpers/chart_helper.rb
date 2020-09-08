module ChartHelper

    def color_state(std_hash)
        std_arr = std_hash.to_a
        std_arr.each do |s|
            if s[1] < 20 
               'red'
            elsif s[1] < 30
                'yellow'
            else
                'green'
            end
        end
    end

    def titleize_name(name)
        name.titleize
    end

    def name
        " Samir is a gentle man"
    end

    def total(a)
        sum = 0
        a.each do |num|
            sum += num
        end
        return sum
    end

end
