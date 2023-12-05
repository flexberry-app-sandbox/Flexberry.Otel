package Otel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Отели
 */
@Entity(name = "IISOtelОтели")
@Table(schema = "public", name = "Отели")
public class Oteli {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименования")
    private String наименования;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Звезды")
    private String звезды;


    public Oteli() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименования() {
      return наименования;
    }

    public void setНаименования(String наименования) {
      this.наименования = наименования;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getЗвезды() {
      return звезды;
    }

    public void setЗвезды(String звезды) {
      this.звезды = звезды;
    }


}