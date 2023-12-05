package Otel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Допуск
 */
@Entity(name = "IISOtelДопуск")
@Table(schema = "public", name = "Допуск")
public class Dopusk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Доступ")
    private String доступ;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gosti")
    @Convert("Gosti")
    @Column(name = "Гости", length = 16, unique = true, nullable = false)
    private UUID _gostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gosti", insertable = false, updatable = false)
    private Gosti gosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnaty")
    @Convert("Komnaty")
    @Column(name = "Комнаты", length = 16, unique = true, nullable = false)
    private UUID _komnatyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnaty", insertable = false, updatable = false)
    private Komnaty komnaty;


    public Dopusk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДоступ() {
      return доступ;
    }

    public void setДоступ(String доступ) {
      this.доступ = доступ;
    }


}